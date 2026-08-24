"use server";

import { createClient } from "@/lib/supabase/server";

export async function getResources() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
  return data;
}
