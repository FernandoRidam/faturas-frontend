import React, { useCallback, useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Field, FieldView, IconView, Label, Loading, Option, Options, OptionsView, Placeholder, Search, SearchView } from "./styles";
import { CaretDown, SpinnerGap, X } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import theme from "../../config/theme";
import { Client } from "../../models/Client";

interface SelectClientProps {
  label: string;
  options: {
    total: number;
    data: Array<Client>;
  };
  value: Client | null;
  onChange: ( client: Client | null ) => void;
  loadingData?: boolean;
  handleLoadOptions?: ( search: string, page: number ) => void;
};

export const SelectClient: React.FC<SelectClientProps> = ({
  options,
  value,
  onChange,
  label,
  handleLoadOptions = () => {},
  loadingData,
}) => {
  const selectViewRef = useDetectClickOutside({ onTriggered: () => setShowOptions(false) });

  const [timeOut, setTimeOut] = useState<NodeJS.Timeout>();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string | null>(null);

  const nextPage = useCallback(() => {
    if (options.data.length < options.total) {
      setPage((value) => value + 1);
    }
  }, [JSON.stringify(options.data)]);

  useEffect(() => {
    if (showOptions) {
      const scrollView = document.getElementById('options-view');

      if (scrollView) {
        scrollView.addEventListener('scroll', () => {
          if (scrollView.scrollTop + scrollView.clientHeight >= scrollView.scrollHeight) {
            nextPage();
          }
        });
      }

      return () => scrollView?.removeEventListener('scroll', () => { });
    } else return;
  }, [showOptions]);

  useEffect(() => {
    handleLoadOptions(search ?? '', page);
  }, [page]);

  useEffect(() => {
    if (timeOut)
      clearTimeout(timeOut);

    if (search !== null) {
      setTimeOut(setTimeout(() => handleLoadOptions(search, 1), 2000));
    }
  }, [search]);

  return (
    <FieldView ref={selectViewRef}>
      <Field
        $open={showOptions}
        onClick={() => setShowOptions(!showOptions)}
      >
        {
          value
            ? <>
                <Label>{value.number}</Label>

                <Label>{value.name}</Label>
              </>
            : <Placeholder>{label}</Placeholder>
        }

        {
          value && !showOptions
            ? (
              <IconView
                $open={showOptions}
                onClick={( e ) => {
                  e.stopPropagation();

                  onChange( null );
                }}
              >
                <X
                  weight="bold"
                  color={showOptions ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY}
                />
              </IconView>
            )
            : (
              <IconView
                $open={showOptions}
              >
                <CaretDown
                  weight="bold"
                  color={showOptions ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY}
                />
              </IconView>
            )
        }
      </Field>

      <AnimatePresence>
        {
          showOptions
            ? <OptionsView $open={showOptions} key="options-view">
              <SearchView>
                <Search
                  placeholder="Buscar por Nº do Cliente, Instalação ou Nome"
                  value={search ?? ''}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </SearchView>

              <Options id="options-view">
                {
                  ((!loadingData) || (page !== 1)) &&
                  options.data.map((option) =>
                    <Option
                      key={option.id ?? ''}
                      $selected={option.id === value?.id}
                      onClick={() => {
                        setSearch( null );

                        onChange(option);

                        setShowOptions(false);
                      }}
                    >
                      <Label>{option.number}</Label>

                      <Label>{option.name}</Label>
                    </Option>
                  )
                }
              </Options>

              {
                loadingData &&
                <Loading>
                  <SpinnerGap
                    size={24}
                  />
                </Loading>
              }
            </OptionsView>
            : <></>
        }
      </AnimatePresence>
    </FieldView>
  );
};
