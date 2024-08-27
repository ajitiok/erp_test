const Pricing = () => {
  return (
    <div id="pricing" className="mt-40 md:mt-96 lg:mt-0">
      <div className="container p-8 mx-auto flex items-center justify-center ">
        <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight lg:text-5xl">
          Pricing
        </h3>
      </div>
      <div className="flex items-center justify-center xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {listPricing.map((item, index) => (
            <div key={index} className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col items-start w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
                <div className="flex flex-col items-center justify-center h-20 ">
                  <h2 className="text-4xl">{item.type}</h2>
                </div>
                <div>
                  {item.benefits.map((benefit, index) => (
                    <p key={index}>{benefit}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const listPricing = [
  {
    type: "Basic",
    benefits: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuangan",
    ],
  },
  {
    type: "Business",
    benefits: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Menganalisa hasil CHART",
      "Support 7x24 Jam",
    ],
  },
  {
    type: "Entrepreneur",
    benefits: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Menganalisa hasil CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
  },
];
