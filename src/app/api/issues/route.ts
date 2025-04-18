import { linearClient } from "@/config/linear-client";
import { NextResponse } from "next/server";
export async function GET() {
  const me = await linearClient.viewer;
  const issues = await me.assignedIssues();
  const issuesList = issues.nodes;

  return NextResponse.json(issuesList);
}
