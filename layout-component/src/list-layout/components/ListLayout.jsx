import { GridWrapper, HorizontalWrapper,  VerticalWrapper } from '../styled/ListLayout.styled'

const ListLayout = ({ items, renderItem, variant = "grid", columns= 3}) => {
  
  const Wrapper = variant === "grid" ? GridWrapper : 
    variant === "horizontal" ? HorizontalWrapper : VerticalWrapper;
  
 const wrapperProps =
    variant === "grid" ? { columns } : {};

  return (
    <Wrapper {...wrapperProps}>
        {items.map((item) => (
            <div key={item.id}>
                {renderItem(item)}
            </div>
        ))}
    </Wrapper>
  )
}

export default ListLayout