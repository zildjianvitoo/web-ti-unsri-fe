type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full bg-gradient-to-r from-primary to-secondary px-4 py-6 md:px-24 md:py-10 lg:w-1/2 lg:rounded-r-full lg:px-12 lg:py-14 xl:px-20">
        <h1 className="text-3xl font-bold text-[#FFFFE1] dark:text-[#1C1C1C] max-lg:text-center sm:text-4xl md:text-5xl xl:text-6xl">
          {title}
        </h1>
      </div>
      <div className="hidden md:gap-4 lg:flex lg:gap-6">
        <div className="size-12 rounded-full bg-[#71EDAA]" />
        <div className="size-12 rounded-full bg-[#E3A5A5]" />
        <div className="size-12 rounded-full bg-[#FACB94]" />
        <div className="size-12 rounded-l-full bg-secondary" />
      </div>
    </div>
  );
}
