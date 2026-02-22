import { ListWrapper } from '../styled/ListLayout.styled'

const ListLayout = ({ items, renderItem, variant = "grid", columns= 3}) => {
  const layoutProps = variant === "grid" ? { $variant: variant, $columns: columns} 
                                : {$variant: variant};

  return (
    <ListWrapper {...layoutProps}>
        {items.map((item) => (
            <div key={item.id}>
                {renderItem(item)}
            </div>
        ))}
    </ListWrapper>
  )
}

export default ListLayout