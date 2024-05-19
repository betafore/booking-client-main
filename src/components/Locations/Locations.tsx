import { Card, CardContent } from "../ui/card";
import EndPointList from "./EndPointList";
import PickupLocationForm from "./PickupLocationForm";
import PickupLocationList from "./PickupLocationList";
import StartPointList from "./StartPointList";

const Locations = () => {
  return (
    <div>
      <div className="row">
        <div className="md:col-6 col-12 md:mb-4 ">
          <Card className="py-4">
            <CardContent>
              <StartPointList />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-6 col-12 md:mb-4">
          <Card className="py-4">
            <CardContent>
              <EndPointList />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-6 col-12 md:mb-4">
          <Card className="py-4">
            <CardContent>
              {" "}
              <PickupLocationList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Locations;
