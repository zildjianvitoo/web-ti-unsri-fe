type Props = {
  admin: {
    img: string;
    name: string;
    role: string;
    field: string;
  };
};

export default function AdministrasiCard({ admin }: Props) {
  return (
    <div className="transisi relative flex min-h-96 flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br from-primary from-[23%] to-secondary p-5 hover:shadow-2xl lg:rounded-md">
      <figure className="absolute bottom-4 z-0 mt-auto scale-110">
        <img src={admin.img} alt="tenaga-pendidik" />
      </figure>
      <div className="relative z-10 text-white">
        <h4 className="text-xl font-semibold">{admin.name}</h4>
        <p className="text-lg">{admin.role}</p>
        <div className="mt-2 line-clamp-1 w-fit rounded-full border border-white px-3">
          {admin.field}
        </div>
      </div>
      <div className="absolute inset-0 z-[8] h-full rounded-b-md bg-gradient-to-t from-[#222222]/50 to-transparent"></div>
    </div>
  );
}

// yang aku ini, compare cb tok...

// <div className="transisi relative aspect-[4/5] w-1/5 overflow-hidden rounded-lg bg-gradient-to-br from-primary/70 to-secondary/70 text-white hover:shadow-2xl">
//   <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/70 to-black/0" />
//   <div className="h-full w-full overflow-hidden rounded-md md:self-stretch">
//     <img
//       src={admin.img}
//       alt={"gambar" + admin.name}
//       className="h-full w-full object-cover object-top"
//     />
//   </div>
//   <div className="absolute bottom-0 w-full px-5 py-5">
//     <h1 className="text-xl font-semibold">{admin.name}</h1>
//     <h3 className="mb-1 text-base">{admin.role}</h3>
//     <p className="w-fit rounded-full border-[1px] border-white px-2 py-1 text-xs">
//       {admin.field}
//     </p>
//   </div>
// </div>
