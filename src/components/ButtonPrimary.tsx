interface buttonProps {
  title: String;
  svg: any;
}

function ButtonPrimary(props: buttonProps) {
  return (
    <>
      <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white w-fit px-8 py-3 leading-[1] rounded-full">
        {props.svg}
        {props.title}
      </button>
    </>
  );
}

export default ButtonPrimary;
