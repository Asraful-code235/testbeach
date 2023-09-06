export default function ContactPage() {
  return (
    <section className="min-h-[50vh] w-full flex items-center justify-center gap-10 flex-col">
      <div className="font-normal text-center space-y-4">
        <h1>Newsletter</h1>
        <p>Inscrivez-vous pour recevoir nos actualités.</p>
      </div>
      <div className="flex items-center justify-center gap-4 flex-wrap ">
        <input
          type="email"
          placeholder="Address e-email"
          className="border border-gray-200 px-6 py-4 focus:outline-none "
        />
        <button className="text-[#bf5d38] font-bold border-2 border-[#bf5d38] rounded-full px-6 py-2">
          Sign Up
        </button>
      </div>
      <p className="text-sm text-center">
        Nous respectons vos données privées.
      </p>
    </section>
  );
}
