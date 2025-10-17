// components/SidebarLink.jsx
interface SidebarLinksProps {
  href: string;
  children: React.ReactNode;
}

export default function SidebarLinks({ href, children }: SidebarLinksProps) {
  return (
<a
  href={href}
  className="
    relative w-3/4 text-center text-white no-underline py-2
    border-y-1
    text-shadow-opacity-80
    hover:text-shadow-[0_0_10px]
    hover:text-amber-50
    hover:text-shadow-orange-400
    transition-all duration-700
  "
  style={
    {
    borderImage: 'radial-gradient(white, #ffffff00) 1',
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.borderImage =
      'radial-gradient(#f59e0b, #fb923c, #dc26262f) 1')
  }   
  onMouseLeave={(e) =>
    (e.currentTarget.style.borderImage =
      'radial-gradient(white, #ffffff00) 1')
  }
>
  {children}
</a>

  );
}


