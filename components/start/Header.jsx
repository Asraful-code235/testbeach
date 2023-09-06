import Button from "../shared/Button";

export default function Header() {
  return (
    <header className="w-screen mx-auto bg-transparent fixed top-0 z-50">
      <nav className="py-6 px-8 flex items-center justify-end">
        <Button variant="light" extraClassName="rounded-full">
          Reserve
        </Button>
      </nav>
    </header>
  );
}
