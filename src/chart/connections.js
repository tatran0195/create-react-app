import { domain } from "./constants";

// get the connections for this instance
const getConnections = async () => {
  const response = await fetch(`${domain}/api/connection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chartInstanceId: process.env.REACT_APP_CHART_INSTANCE_ID,
    }),
  });
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};

export { getConnections };
