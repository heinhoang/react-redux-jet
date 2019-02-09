import React, { PureComponent, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { getLocale } from '../../utils';
import { ILangState } from './store/reducers';
import { selectLocale } from './store/selectors';

export interface IMessages {
  [locale: string]: object;
}

export interface IProps {
  locale ? : string;
  messages: IMessages;
  children: ReactNode;
}

const LanguageProviderC = (props: IProps) => {
  const { locale = getLocale(), children, messages } = props;

return (
<IntlProvider
    locale={locale} key={locale} messages={messages[locale]}>
    {React.Children.only(children)}
    </IntlProvider>
  );
}

const mapStateToProps = (state: ILangState, props: IProps): ILangState => {
  const locale = selectLocale()(state);
  return { locale };
};

// https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d
export const LanguageProvider = connect(mapStateToProps)(LanguageProviderC);
