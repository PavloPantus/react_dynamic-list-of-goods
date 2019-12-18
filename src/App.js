import React from 'react';
import './App.scss';
import GoodsList from './GoodsList';
import { getGoods, LoadeRedGoods, Load5FirstGoods } from './getGoodsMethods';

class App extends React.Component {
  state = {
    goods: [],
    hiddenButton: '',
  }

  render() {
    return (

      <div className="App">
        <h1 className="heading">Goods</h1>
        <div className="App__controls">
          <button
            type="button"
            className={
              this.state.hiddenButton === 'LoadGoods'
                ? 'hidden App__button' : 'App__button'
            }
            onClick={() => {
              getGoods()
                .then(
                  (data) => {
                    this.setState(
                      {
                        goods: data,
                        hiddenButton: 'LoadGoods',
                      }
                    );
                  }
                );
            }
            }
          >
            Load goods
          </button>

          <button
            type="button"
            className={
              this.state.hiddenButton === 'Load5First'
                ? 'hidden App__button' : 'App__button'
            }
            onClick={
              () => {
                Load5FirstGoods()
                  .then(
                    (data) => {
                      this.setState(
                        {
                          goods: data,
                          hiddenButton: 'Load5First',
                        }
                      );
                    }
                  );
              }
            }
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className={
              this.state.hiddenButton === 'LoadRedGoods'
                ? 'hidden App__button' : 'App__button'
            }
            onClick={
              () => {
                LoadeRedGoods()
                  .then(
                    (data) => {
                      this.setState({
                        goods: data,
                        hiddenButton: 'LoadRedGoods',
                      });
                    }
                  );
              }
            }
          >
            Load red goods
          </button>

        </div>

        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
