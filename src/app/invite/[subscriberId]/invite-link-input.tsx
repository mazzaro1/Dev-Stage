"use client";

import { Copy, Link } from "lucide-react";
import { IconButton } from "../../../components/icon-button";
import { InputField, Inputicon, InputRoot } from "../../../components/input";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <Inputicon>
        <Link className="size-5" />
      </Inputicon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
