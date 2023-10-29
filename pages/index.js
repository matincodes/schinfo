import Nav from "@/components/Nav";

export default function Home() {
  const name = "Hello"
  return (
    <div className="home h-screen">
      <Nav name={name}/>
    </div>
  )
}
