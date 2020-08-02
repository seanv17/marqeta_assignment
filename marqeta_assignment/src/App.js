import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardProductToken: ''
    };
  }

  createCardProduct() {

    const cardProductData = {
      name: 'social_media_adspend',
      active: false,
      start_date: '2020-07-29',
      end_date: '2022-07-29',
      config: {
        poi: {
          other: {
            allow: false,
            card_presence_required: false,
            cardholder_presence_required: false
          },
          ecommerce: true,
          atm: false
        },
        transaction_controls: {
          accepted_countries_token: 'accept_us_only',
          always_require_pin: false,
          always_require_icc: false,
          allow_gpa_auth: true,
          require_card_not_present_card_security_code: false,
          allow_mcc_group_authorization_controls: false,
          allow_first_pin_set_via_financial_transaction: false,
          ignore_card_suspended_state: false,
          allow_chip_fallback: false,
          allow_network_load: false,
          allow_network_load_card_activation: false,
          allow_quasi_cash: false,
          enable_partial_auth_approval: false,
          address_verification: {
            av_messages: {
              validate: true,
              decline_on_address_number_mismatch: false,
              decline_on_postal_code_mismatch: true
            },
            auth_messages: {
              validate: true,
              decline_on_address_number_mismatch: false,
              decline_on_postal_code_mismatch: true
            }
          }
        },
        selective_auth: {
          sa_mode: 1,
          enable_regex_search_chain: false,
          dmd_location_sensitivity: 0
        },
        special: {
          merchant_on_boarding: false
        },
        card_life_cycle: {
          activate_upon_issue: false,
          expiration_offset: {
            unit: 'YEARS',
            value: 0,
            min_offset: {
              unit: 'YEARS',
              value: 0
            }
          },
          card_service_code: 125,
          update_expiration_upon_activation: false
        },
        clearing_and_settlement: {
          overdraft_destination: 'GPA'
        },
        jit_funding: {
          paymentcard_funding_source: {
            enabled: false,
            refunds_destination: 'GATEWAY'
          },
          programgateway_funding_source: {
            enabled: false,
            refunds_destination: 'GATEWAY',
            always_fund: false
          },
          program_funding_source: {
            enabled: false,
            refunds_destination: 'PROGRAM_FUNDING_SOURCE'
          }
        },
        digital_wallet_tokenization: {
          provisioning_controls: {
            manual_entry: {
              enabled: false,
              address_verification: {
                validate: true
              }
            },
            wallet_provider_card_on_file: {
              enabled: false,
              address_verification: {
                validate: true
              }
            },
            in_app_provisioning: {
              enabled: false,
              address_verification: {
                validate: true
              }
            }
          }
        },
        fulfillment: {}
      }
    };

    fetch('https://sandbox-api.marqeta.com/v3/cardproducts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(cardProductData),
    })
      .then(response => response.json())
      .then(cardProductData => {
        console.log('Card Product Data Response:', cardProductData);
      })
      .then(cardProductData => this.setState({ cardProductToken: cardProductData.token }))
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className='App' >
        <h2>API steps to follow:</h2>
        <p>1. <button onClick={() => this.createCardProduct()}>Create card product definition</button></p>
        <p>2. <button onClick={() => this.createProgramFundingResource()}>Create program funding resource</button></p>
        <p>3. <button onClick={() => this.createUser()}>Create user</button></p>
        <p>4. <button onClick={() => this.createVelocityControls()}>Create velocity controls</button></p>
        <p>5. <button onClick={() => this.createCard()}>Create a card</button></p>
        <p>6. <button onClick={() => this.createACHResource()}>Create an ACH resource</button></p>
      </div>
    );
  }
}

export default App;