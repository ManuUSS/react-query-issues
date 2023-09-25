import { FC } from "react";
import { Loading } from "../../shared/components/Loading";
import { useLabels } from "../hooks/useLabels"

interface Props {
  selectedLabels: string[];
  onChange: ( labelName: string ) => void;
}

export const LabelPicker:FC<Props> = ({ selectedLabels, onChange }) => {

  const labelsQuery = useLabels();

  if( labelsQuery.isLoading )
    return ( <Loading /> )

  return (
    <div>
      {
        labelsQuery.data?.map(({ id, color, name }) => (
          <span
            key={ id }
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #${ color }`, color: `#${ color }` }}
          >
            { name }
          </span>
        ))
      }
    </div>
  )
}
