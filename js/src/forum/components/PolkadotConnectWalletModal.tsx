import app from 'flarum/forum/app';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/common/components/Button';
import icon from 'flarum/common/helpers/icon';
import Link from 'flarum/common/components/Link';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import WalletAccounts from './WalletAccounts';
import type { IConnectWalletModalAttrs } from './ConnectWalletModal';
import type { Wallet } from '@subwallet/wallet-connect/types';
import type Mithril from 'mithril';

export interface WalletKind {
  key: string;
  title: string;
  wallets: Wallet[];
}

export interface IPolkadotConnectWalletModalAttrs extends IConnectWalletModalAttrs {}

export default class PolkadotConnectWalletModal<
  CustomAttrs extends IPolkadotConnectWalletModalAttrs = IPolkadotConnectWalletModalAttrs
> extends Component<CustomAttrs> {
  private selectedWallet: Wallet | null = null;

  className() {
    return 'PolkadotConnectWalletModal';
  }

  title() {
    return app.translator.trans('maojindao55-web3.forum.polkadot-connect-wallet-modal.title');
  }

  view() {
    if (!app.web3.loaded) {
      app.web3.load().then(() => m.redraw());
      return <LoadingIndicator />;
    }

    return <div className="Form">{this.selectedWallet ? this.selectedWalletView() : this.walletSelectionView()}</div>;
  }

  walletSelectionView() {
    return this.walletKindItems().toArray();
  }

  walletKindItems() {
    const items = new ItemList<Mithril.Children>();

    const { getDotsamaWallets } = app.web3.loadedModules();

    const wallets: WalletKind = {
      key: 'polkadot',
      title: 'Polkadot',
      wallets: getDotsamaWallets(),
    };

    items.add('polkadot', <div className="Form-group">{this.walletKindView(wallets)}</div>);

    return items;
  }

  walletKindView(walletKind: WalletKind, index: number = 0) {
    return (
      <div className="ConnectWalletModal-walletKind" key={index}>
        <div className="ConnectWalletModal-walletKind-title">{walletKind.title}</div>
        <div className="ConnectWalletModal-walletKind-list">
          {walletKind.wallets.map((wallet, walletIndex) => this.walletView(wallet, walletIndex))}
        </div>
      </div>
    );
  }

  walletView(wallet: Wallet, walletIndex: number = 0) {
    const Tag = wallet.installed ? Button : Link;
    let attrs: ComponentAttrs;

    if (!wallet.installed) {
      attrs = {
        href: wallet.installUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    } else {
      attrs = {
        onclick: this.listWalletAccounts.bind(this, wallet),
      };
    }

    return (
      <Tag className="Button PolkadotConnectWalletModal-wallet" key={walletIndex} {...attrs}>
        <div className="PolkadotConnectWalletModal-wallet-logo">
          <img {...wallet.logo} alt="" />
        </div>
        <div className="PolkadotConnectWalletModal-wallet-title">{wallet.title}</div>
        <div className="PolkadotConnectWalletModal-wallet-indicator">{wallet.installed ? icon('fas fa-arrow-right') : icon('fas fa-download')}</div>
      </Tag>
    );
  }

  selectedWalletView() {
    return (
      <WalletAccounts
        username={this.attrs.username}
        wallet={this.selectedWallet}
        onback={this.listWallets.bind(this)}
        onattach={this.attrs.onattach}
      />
    );
  }

  listWallets() {
    this.selectedWallet = null;
  }

  listWalletAccounts(wallet: Wallet) {
    this.selectedWallet = wallet;
  }
}
