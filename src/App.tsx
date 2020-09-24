import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AutoComplete } from './components/AutoComplete';
import { RootState } from './redux/reducers';
import UserActions from './redux/reducers/user';
import { Flex, Box } from './common/style';
import { Button } from './components/Button';

function App() {
  const dispatch = useDispatch();
  const [selectedItem, onSelect] = useState<UserData | null>();
  const [isSubmitted, setSubmit] = useState<boolean>(false);
  console.log(selectedItem);
  useEffect(() => {
    dispatch(UserActions.requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    !isSubmitted && onSelect(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const { data: users } = useSelector((state: RootState) => state.users);

  const StyledDisplay = styled(Box)`
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #4c4f50;
  `;

  return (
    <Flex justifyContent='center'>
      <Box mt={4}>
        {isSubmitted && (
          <StyledDisplay>
            <Flex>
              <Box pr={2}>name:</Box>
              {selectedItem?.name}
            </Flex>
            <Flex>
              <Box pr={2}>username:</Box>
              {selectedItem?.username}
            </Flex>
            <Flex>
              <Box pr={2}>email:</Box>
              {selectedItem?.email}
            </Flex>
            <Flex>
              <Box pr={2}>address:</Box>
              <Box>
                <Box>
                  {selectedItem?.address.street},{selectedItem?.address.city},
                  {selectedItem?.address.zipcode}
                </Box>
                <Box>{selectedItem?.address.suite}</Box>
              </Box>
            </Flex>
            <Flex>
              <Box pr={2}>phone:</Box>
              {selectedItem?.phone}
            </Flex>
            <Flex>
              <Box pr={2}>website:</Box>
              {selectedItem?.website}
            </Flex>
            <Flex>
              <Box pr={2}>company:</Box>
              <Box>{selectedItem?.company.name}</Box>
            </Flex>
          </StyledDisplay>
        )}
        {!isSubmitted && (
          <Flex alignItems='center' pt={4}>
            <AutoComplete
              items={users.asMutable({ deep: true })}
              onSelect={onSelect}
              setSubmit={setSubmit}
            />
            <Box pl={2}>
              <Button
                onClick={() => {
                  selectedItem && setSubmit(true);
                }}
              >
                submit
              </Button>
            </Box>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

export default App;
