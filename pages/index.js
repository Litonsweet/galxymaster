import fs from "fs";
import path from "path";
export async function getStaticProps(){
  const file = path.join(process.cwd(), "public", "app.html");
  let html = "";
  try{ html = fs.readFileSync(file, "utf-8"); }catch(e){}
  // Remove artifact wrapper script if present, keep only the app body - but keep ALL CSS/JS intact
  return { props: { html } };
}
export default function Home({html}){
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
