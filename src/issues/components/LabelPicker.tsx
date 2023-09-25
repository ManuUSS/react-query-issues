import { useLabels } from "../hooks/useLabels"

export const LabelPicker = () => {

  const labelsQuery = useLabels();

  if( labelsQuery.isLoading )
    return (<h1>Loading...</h1>)

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
