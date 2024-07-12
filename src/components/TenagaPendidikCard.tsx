import React from "react";

type Props = {
  teacher: {
    image: string;
    name: string;
    role: string;
    field: string;
  };
};

export default function TenagaPendidikCard({ teacher }: Props) {
  return (
    <div className="relative flex min-h-96 flex-col justify-end rounded-lg bg-gradient-to-br from-primary/70 from-[23%] to-secondary/70 p-5 lg:rounded-2xl">
      <figure className="absolute bottom-4 z-0 mt-auto scale-110">
        <img src={teacher.image} alt="tenaga-pendidik" />
      </figure>
      <div className="relative z-10 text-white">
        <h4 className="text-xl font-semibold">{teacher.name}</h4>
        <p className="text-lg">{teacher.role}</p>
        <div className="mt-2 w-fit rounded-full border border-white px-3">
          {teacher.field}
        </div>
      </div>
      <div className="absolute inset-0 z-[8] h-full rounded-b-2xl bg-gradient-to-t from-[#222222]/60 to-transparent"></div>
    </div>
  );
}
