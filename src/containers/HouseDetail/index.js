/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Descriptions } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { HouseDetailContainer } from "./style";
import { apis } from "services/apis";

function HouseDetail() {
  const history = useHistory();
  const { id } = useParams();
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getHouseDetail = async () => {
    setIsLoading(true);
    try {
      const { ok, data } = await apis.getHouseDetail(id);
      if (ok) {
        setHouse(data);
      }
    } catch (err) {
      console.error({ err });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getHouseDetail();
  }, [history.location.pathname]);

  return (
    <HouseDetailContainer>
      <div className="back-wrapper mb-5">
        <Link to="/">
          <FaArrowLeft /> Back to Characters
        </Link>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <Descriptions bordered column={2} title={house.name}>
          <Descriptions.Item label="Region">{house.region}</Descriptions.Item>
          <Descriptions.Item label="Coat of Arms">
            {house.coatOfArms}
          </Descriptions.Item>
          <Descriptions.Item label="Words">{house.words}</Descriptions.Item>
          <Descriptions.Item label="Titles">
            {house.titles?.length > 0 ? house.titles.join(", ") : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Seats">
            {house.seats?.length > 0 ? house.seats.join(", ") : ""}
          </Descriptions.Item>
          <Descriptions.Item label="Has died out">
            {house.diedOut ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Has overlord">
            {house.overlord ? "Yes" : "No"}
          </Descriptions.Item>
          <Descriptions.Item label="Number of Cadet Branches">
            {house.cadetBranches?.length}
          </Descriptions.Item>
        </Descriptions>
      )}
    </HouseDetailContainer>
  );
}

export default HouseDetail;
