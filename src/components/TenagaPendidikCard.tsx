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
    <a
      className="transisi relative flex min-h-72 w-full flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br from-primary from-[23%] to-secondary hover:shadow-md md:min-h-96 md:basis-1/4 lg:rounded-2xl xl:basis-1/5"
      href="/dosen"
    >
      <figure className="flex h-full w-full justify-center">
        <img
          src={teacher.image}
          alt="tenaga-pendidik"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="absolute z-10 flex flex-col p-3 text-white md:p-5">
        <h4 className="!xl:leading-6 font-semibold !leading-7 md:text-xl lg:text-2xl">
          {teacher.name}
        </h4>
        <p className="-mt-1 text-sm md:text-sm lg:text-base">{teacher.role}</p>
        <div className="mt-2 !line-clamp-1 w-fit rounded-full border border-white px-3 py-1 text-xs leading-3 md:text-sm">
          {teacher.field}
        </div>
      </div>
      <div className="absolute z-[8] h-full w-full bg-gradient-to-t from-[#222222]/80 to-transparent"></div>
    </a>
  );
}

// export default function TenagaPendidikCard({ teacher }: Props) {
//   return (
//     <div className="relative flex min-h-96 flex-col justify-end rounded-lg bg-gradient-to-br from-primary from-[23%] to-secondary p-5 lg:rounded-2xl">
//       <figure className="absolute bottom-4 z-0 mt-auto scale-110">
//         <img src={teacher.image} alt="tenaga-pendidik" />
//       </figure>
//       <div className="relative z-10 text-white">
//         <h4 className="text-xl font-semibold">{teacher.name}</h4>
//         <p className="text-lg">{teacher.role}</p>
//         <div className="mt-2 line-clamp-1 w-fit rounded-full border border-white px-3">
//           {teacher.field}
//         </div>
//       </div>
//       <div className="absolute inset-0 z-[8] h-full rounded-lg bg-gradient-to-t from-[#222222]/50 to-transparent"></div>
//     </div>
//   );
// }
