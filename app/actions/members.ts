"use server";

import { createClient } from "@/lib/supabase/server";

export async function getMembers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching members:", error);
    return [];
  }
  return data;
}
