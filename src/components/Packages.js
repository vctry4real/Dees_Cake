import Card from "./Card";

export default function Packages() {
  return (
    <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packagesData.map((packageItem) => (
        <Card
          key={packageItem.id}
          className="border border-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <PackageContent {...packageItem} />
        </Card>
      ))}
    </div>
  );
}

const PackageContent = ({
  title,
  list,
  list1,
  list2,
  list3,
  list4,
  list5,
  price,
}) => {
  return (
    <div className="flex flex-col gap-y-3 px-6 py-8 bg-gradient-primary rounded-lg">
      <div className="flex flex-col items-center gap-y-4">
        <h3 className="text-2xl font-semibold text-secondary-default text-center">
          {title}
        </h3>
      </div>
      <div className="mt-4">
        <ul className="space-y-2 text-colorText-default">
          {list && <li className="flex items-center gap-x-2">• {list}</li>}
          {list1 && <li className="flex items-center gap-x-2">• {list1}</li>}
          {list2 && <li className="flex items-center gap-x-2">• {list2}</li>}
          {list3 && <li className="flex items-center gap-x-2">• {list3}</li>}
          {list4 && <li className="flex items-center gap-x-2">• {list4}</li>}
          {list5 && <li className="flex items-center gap-x-2">• {list5}</li>}
        </ul>
      </div>
      <h3 className="mt-6 text-lg font-bold text-accent-foreground text-center">
        Priced at N{price}
      </h3>
      <button className="mt-4 w-full py-2 bg-secondary-default text-secondary-foreground font-medium rounded-md border border-secondary-default  hover:bg-secondary-foreground hover:text-secondary-default transition-colors duration-300">
        Select Package
      </button>
    </div>
  );
};

const packagesData = [
  {
    id: 1,
    title: "Essential Package",
    list: "Custom single-tier cake",
    list1: "Serves 10-15 people",
    list2: "Basic decoration",
    list3: "3 flavor options",
    price: "15,000",
  },
  {
    id: 2,
    title: "Signature Package ",
    list: "Two-tier custom cake",
    list1: "Serves 25-30 people",
    list2: "Advanced decoration",
    list3: "5 flavor options",
    list4: "Complimentary tasting",
    price: "25,000",
  },
  {
    id: 3,
    title: "Premium Package ",
    list: "Three-tier custom cake",
    list1: "Serves 50-75 people",
    list2: "Premium decoration",
    list3: "Unlimited flavor options",
    list4: "Complimentary tasting",
    list5: "Free delivery",
    price: "40,000",
  },
];
