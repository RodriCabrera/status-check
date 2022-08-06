import { Card, StatusText } from "./common.styles";

export const StatusCard = ({ data, name }) => {
  const endpointName = name.toUpperCase();
  if (data.status === "fulfilled") {
    return (
      <Card>
        <h3>{endpointName}</h3>
        <StatusText>Healthy</StatusText>
        <h6>Hostname: {data.value.data.hostname}</h6>
        <h6>Time: {new Date(data.value.data.time).toLocaleTimeString()}</h6>
      </Card>
    );
  } else {
    return (
      <Card>
        <h3>{endpointName}</h3>
        <StatusText error>Error</StatusText>
      </Card>
    );
  }
};
