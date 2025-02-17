import Social from "@/components/social";

export default function () {
  return (
    <section>
      <div className="w-screen flex-col px-6 py-20 lg:flex lg:px-10 xl:px-24">
        
        <div className="mx-auto my-12 w-full border border-[#E4E4E7] lg:my-20"></div>
        <div>
          <p className="font-inter text-center text-sm text-gray-500 lg:mt-0">
            © Copyright 2025.{" "}
            <a
              href="https://59.lc"
              target="_blank"
              className="text-primary hidden md:inline-block"
            >
              59.lc
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
