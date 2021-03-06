import React from "react";
import { Card, Typography } from "antd";

interface Props {
  metric: string;
  label: string;
  className?: string;
}

const MetricCard = ({ metric, label, className }: Props) => {
  return (
    <div
      className={`flex flex-col align-center text-center space-y-4 py-4 px-6 ${className} rounded z-10`}
    >
      <Typography.Text className="text-blue-700 text-2xl md:text-3xl lg:text-5xl">
        {metric}
      </Typography.Text>
      <Typography.Text>{label}</Typography.Text>
    </div>
  );
};

export default MetricCard;
