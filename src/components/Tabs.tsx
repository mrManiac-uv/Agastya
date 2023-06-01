import Search from "./Search";

function Tabs() {
  return (
    <section className="flex items-center justify-between mx-8 my-4 px-8 py-3 border-b border-[#dcdcdc]">
      <div className="flex items-center gap-12">
        <div className="px-3 py-2 text-grey">Project Planning</div>
        <div className="px-3 py-2 bg-secondary font-medium rounded-md">
          Weekly Planning
        </div>
        <div className="px-3 py-2 text-grey">Planning Insights</div>
      </div>
      <div className="ml-auto">
        <Search />
      </div>
    </section>
  );
}

export default Tabs;
