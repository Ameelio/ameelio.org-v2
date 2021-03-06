import React, { ReactNode } from "react";
import BasicCard from "components/Cards/BasicCard";
import { TCallToAction, TValuePropItem } from "types";
import ValuePropsItem from "components/Product/ValuePropsItem";
import Image, { ImageProps } from "next/image";
import Button from "components/Button";
import { useAppContext } from "context/state";
interface Props {
  valueProps: TValuePropItem[];
  className?: string;
  cta?: TCallToAction;
  meta?: ReactNode;
}

const ValuePropCard = ({ valueProps, cta, meta, className }: Props) => {
  const { togglePetitionModal } = useAppContext();

  return (
    <BasicCard className={`my-16 space-y-4 p-4 z-10 ${className}`}>
      <div className="flex flex-col space-y-8">
        {valueProps.map((value) => (
          <ValuePropsItem key={value.title} {...value} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        {cta && (
          <Button
            className="mt-4"
            variant="primary"
            onClick={() => {
              if (cta.link === "petition") {
                togglePetitionModal();
                return;
              }
              window.open(cta.link, "_blank");
            }}
          >
            {cta.text}
          </Button>
        )}
        {meta}
      </div>
    </BasicCard>
  );
};

export default ValuePropCard;
