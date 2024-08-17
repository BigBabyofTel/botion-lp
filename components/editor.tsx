"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useState } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string | undefined;
  editable?: boolean;
}

export default function Editor({
  onChange,
  initialContent,
  editable,
}: EditorProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const { edgestore } = useEdgeStore();
  const { resolvedTheme } = useTheme();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        formattingToolbar
        sideMenu
        slashMenu
        filePanel
        onChange={() => {
          setBlocks(editor.document);
          onChange(JSON.stringify(blocks, null, 2));
        }}
      />
    </div>
  );
}
