const CityCard = () => {
  return (
    <div>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-full">
              <div className="bg-indigo-400 rounded-t-lg shadow-xl card ">
                <div className="p-0">
                  <div className="flex justify-between">
                    <div className="px-4 pt-4 pb-2">
                      <h3 className="mb-1 text-lg font-semibold card-title title-font">
                        London
                      </h3>
                      <h2 className="mb-2 text-sm font-medium tracking-wider subheading">
                        United Kingdom
                      </h2>
                    </div>
                    {/* <div>
                      <p className="px-4 pt-4 pb-2 bg-indigo-400 rounded-t-lg">
                        Cost of Lifestyle
                      </p>
                    </div> */}
                  </div>
                  <div>
                    <table className="table w-full rounded-t-lg">
                      <tbody>
                        <tr>
                          <td className="w-1/2 text-left rounded-none">
                            Middle Class
                          </td>
                          <td className="w-1/2 text-right rounded-none">
                            £30,000
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">High Value</td>
                          <td className="text-right">£100,000</td>
                        </tr>
                        <tr>
                          <td className="text-left rounded-none">
                            Balling out of control
                          </td>
                          <td className="text-right rounded-none">£600,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <figure>
                    <img
                      className="w-full h-auto rounded-b-lg"
                      src="https://images.unsplash.com/photo-1620466376076-52ce523b6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTkzMjd8MHwxfHNlYXJjaHwxfHxSdWdhb3xlbnwwfHx8fDE2NjI5MTAzMzI&ixlib=rb-1.2.1&q=80&w=1080"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityCard;
