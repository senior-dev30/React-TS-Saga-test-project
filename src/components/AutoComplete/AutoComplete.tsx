import React, { FC, useState, createRef } from 'react';
import FloatAnchor from 'react-float-anchor';

import { Flex } from '../../common/style';
import {
  Panel,
  StyledInputWrapper,
  MenuInput,
  StyledContainer,
  MenuListWrapper,
  List,
} from './styles';

type Props = {
  items: UserData[];
  onSelect?: (value: UserData | null) => void;
  setSubmit?: (value: boolean) => void;
};

export const AutoComplete: FC<Props> = props => {
  const { items, onSelect, setSubmit } = props;
  const [opened, setOpened] = useState<boolean>(false);
  const [filterKey, setFilterKey] = useState<string>('');
  const _floatAnchorRef = createRef<FloatAnchor>();
  const [activeItem, setActiveItem] = useState<number>(0);

  const filterItems = (items: UserData[]) => {
    return items
      .map(item => {
        return item.name
          ?.toLowerCase()
          .startsWith((filterKey as string).toLowerCase())
          ? item
          : null;
      })
      .filter(Boolean);
  };

  const filteredItems = filterItems(items);

  const onKeyDown = (e: any) => {
    console.log(e.keyCode);
    if (opened && e.key === 'Escape') {
      setOpened(false);
    }
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveItem(0);
      onSelect && onSelect(filteredItems[activeItem] as UserData);
      setFilterKey((filteredItems[activeItem] as UserData).name);
      setOpened(false);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeItem === 0) {
        return;
      }
      setActiveItem(activeItem - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeItem + 1 === filteredItems.length) {
        return;
      } else {
        setActiveItem(activeItem + 1);
      }
    } else if (e.keyCode === 8) {
      setOpened(true);
    }
  };

  return (
    <div>
      <FloatAnchor
        ref={_floatAnchorRef}
        options={{ position: 'bottom', hAlign: 'left' }}
        anchor={anchorRef => (
          <Flex>
            <StyledInputWrapper
              alignItems='center'
              minWidth='auto'
              opened={opened}
            >
              <MenuInput
                ref={anchorRef}
                type='text'
                value={filterKey}
                onChange={e => {
                  onSelect && onSelect(null);
                  setFilterKey(e.target.value);
                  setSubmit && setSubmit(false);
                  setActiveItem(0);
                }}
                onFocus={() => setOpened(true)}
                onKeyDown={onKeyDown}
              />
            </StyledInputWrapper>
          </Flex>
        )}
        float={
          !(opened && filteredItems.length) ? null : (
            <StyledContainer>
              <MenuListWrapper>
                {filteredItems.map((item, index) => {
                  return (
                    item && (
                      <List
                        key={index}
                        isActived={index === activeItem}
                        onClick={() => {
                          onSelect && onSelect(item);
                          setFilterKey(item.name);
                          setOpened(false);
                        }}
                      >
                        {item?.name}
                      </List>
                    )
                  );
                })}
              </MenuListWrapper>
            </StyledContainer>
          )
        }
      />
      {opened && (
        <Panel
          onClick={() => {
            setOpened(false);
          }}
        />
      )}
    </div>
  );
};
