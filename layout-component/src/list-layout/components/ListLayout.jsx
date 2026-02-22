import { ListWrapper } from '../styled/ListLayout.styled'

const ListLayout = ({ items, renderItem, variant = "grid", columns= 3}) => {
  return (
    <ListWrapper $variant={variant} $columns={ columns}>
        {items.map((item) => (
            <div key={item.id}>
                {renderItem(item)}
            </div>
        ))}
    </ListWrapper>
  )
}

export default ListLayout