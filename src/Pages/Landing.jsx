import React, { useEffect } from "react";
import axios from "axios";

const Landing = () => {
  const options = {
    method: "POST",
    url: "https://realty-in-us.p.rapidapi.com/properties/v3/list",
    headers: {
      "x-rapidapi-key": "78c6144618msh5435c10398d43b1p1005dfjsn8cbc06d40e9d",
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      limit: 200,
      offset: 0,
      postal_code: "90004",
      status: ["for_sale", "ready_to_build"],
      sort: {
        direction: "desc",
        field: "list_date",
      },
    },
  };

  async function fetchData() {
    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div>
      <div id="landing__main">
        <div className="container">
          <div className="row">
            <div className="landing__sections">
              <div className="homes__sections">
                <h2 className="landing__section--header">Places to stay</h2>
                <div className="landing__section--content">
                  <div className="content__card">
                    <figure className="content__img--wrapper">
                      <img src="" alt="" className="content__img" />
                    </figure>
                    <div className="content__details">
                      <div className="content__rates"></div>
                      <div className="content__ratings"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
