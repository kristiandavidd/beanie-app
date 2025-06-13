import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { type } = req.query;

  let query = supabase.from("product").select("*");

  if (type === "bestseller") {
    query = query.order("sold", { ascending: false }).limit(5);
  } else if (type === "newest") {
    query = query.order("created_at", { ascending: false }).limit(5);
  } else {
    query = query.order("created_at", { ascending: true }).limit(9);
  }

  const { data, error } = await query;

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
}
