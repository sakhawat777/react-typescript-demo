// type ListProps = {
//     items: string[] | number
//     onClick: (value: string) => void
// }

// generic props
type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
// export const List = <T extends {id: number}>({items, onClick}: ListProps<T>) => {
export const List = <T extends {}>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
              return (
                  <div key={index} onClick={() => onClick(item)}>
                      {item}
                  </div>
            //     <div key={item.id} onClick={() => onClick(item)}>
            //     {item}
            // </div>
              )  
            })}
        </div>
    )
}