import { FC } from "react";

const RegionData: FC<{ data: Region }> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default RegionData;
