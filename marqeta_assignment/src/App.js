import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardProductToken: '',
      MCCGroupToken: '',
      programFundingResourceToken: '',
      userToken: '',
      cardToken: '',
      velocityControlsToken: '',
      fundUserAccountToken: ''
    };
  }

  // Step 1 handler
  handleCreateCardProduct() {

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
        this.setState({ cardProductToken: cardProductData.token });
        console.log('Card Product Data Response:', cardProductData);
        console.log('Card Product Token:', cardProductData.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 2 handler
  handleCreateMCCGroup() {

    const MCCGroupData = {
      name: 'google_facebook_spends',
      mccs: [
        "0123"
      ],
      active: true,
      config: {
        authorization_controls: {
          hold_increase: {
            type: 'AMOUNT',
            value: 10
          },
          hold_expiration_days: 10
        }
      }
    };

    fetch('https://sandbox-api.marqeta.com/v3/mccgroups', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(MCCGroupData),
    })
      .then(response => response.json())
      .then(MCCGroupData => {
        this.setState({ MCCGroupToken: MCCGroupData.token });
        console.log('MCC Group Data Response:', MCCGroupData);
        console.log('MCC Group Data Token:', MCCGroupData.token);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 3 handler
  handleCreateProgramFundingResource() {

    const programFundingResourceData = {
      name: 'Program Funding'
    };

    fetch('https://sandbox-api.marqeta.com/v3/fundingsources/program', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(programFundingResourceData),
    })
      .then(response => response.json())
      .then(programFundingResourceData => {
        this.setState({ programFundingResourceToken: programFundingResourceData.token });
        console.log('Program Funding Resource Data Response:', programFundingResourceData);
        console.log('Program Funding Resource Data Token:', programFundingResourceData.token);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 4 handler
  handleCreateUser() {

    const userData = {
      first_name: 'Sean',
      last_name: 'Van Ho',
      active: true
    };

    fetch('https://sandbox-api.marqeta.com/v3/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(userData => {
        this.setState({ userToken: userData.token });
        console.log('User Data Response:', userData);
        console.log('User Data Token:', userData.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 5 handler
  handleCreateVelocityControls() {

    const velocityControlsData = {
      name: 'google_facebook',
      association: {
        card_product_token: this.state.cardProductToken
      },
      merchant_scope: {
        mcc_group: this.state.MCCGroupToken
      },
      approvals_only: false,
      include_purchases: true,
      include_withdrawals: false,
      include_transfers: false,
      include_cashback: false,
      include_credits: false,
      currency_code: 'USD',
      amount_limit: 100,
      velocity_window: 'DAY',
      active: false
    };

    fetch('https://sandbox-api.marqeta.com/v3/velocitycontrols', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(velocityControlsData),
    })
      .then(response => response.json())
      .then(velocityControlsData => {
        this.setState({ velocityControlsToken: velocityControlsData.token });
        console.log('Velocity Response:', velocityControlsData);
        console.log('Velocity Token:', velocityControlsData.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 6 handler
  handleCreateCard() {

    const cardData = {
      card_product_token: this.state.cardProductToken,
      expedite: false,
      expiration_offset: {
        unit: 'YEARS',
        value: 0
      },
      user_token: this.state.userToken,
      fulfillment: {
        shipping: {
          method: 'FEDEX_EXPEDITED',
          return_address: {
            first_name: 'Sean',
            last_name: 'Van Ho',
            address1: '50 Beale St',
            address2: 'Fl 7',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105',
            country: 'US',
            phone: '555-555-5555',
            postal_code: '94105'
          },
          recipient_address: {
            first_name: 'Sean',
            last_name: 'Van Ho',
            address1: '50 Beale St',
            address2: 'Fl 7',
            city: 'San Francisco',
            state: 'CA',
            zip: '94105',
            country: 'US',
            phone: '555-555-5555',
            postal_code: '94105'
          },
          care_of_line: ''
        },
        card_fulfillment_reason: 'NEW'
      },
      activation_actions: {
        terminate_reissued_source_card: false,
        swap_digital_wallet_tokens_from_card_token: ''
      }
    };

    fetch('https://sandbox-api.marqeta.com/v3/cards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(cardData),
    })
      .then(response => response.json())
      .then(cardData => {
        this.setState({ cardToken: cardData.token });
        console.log('Card Data Response:', cardData);
        console.log('Card Data Token:', cardData.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // Step 7 handler
  handleFundUserAccount() {

    const fundUserAccountData = {
      user_token: this.state.userToken,
      amount: '100',
      currency_code: 'USD',
      funding_source_token: this.state.programFundingResourceToken
    };

    fetch('https://sandbox-api.marqeta.com/v3/gpaorders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('49ebd492-d78a-43db-b2a0-78e2c9d25d01:2034b9a2-6947-4586-a8f3-816d44d316ec')
      },
      body: JSON.stringify(fundUserAccountData),
    })
      .then(response => response.json())
      .then(fundUserAccountData => {
        this.setState({ fundUserAccountToken: fundUserAccountData.token });
        console.log('Fund User Account Data Response:', fundUserAccountData);
        console.log('Fund User Account Data Token:', fundUserAccountData.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className='App' >
        <h2>API steps to follow:</h2>
        <p>1. <button onClick={() => this.handleCreateCardProduct()}>Create card product definition</button></p>
        <p>2. <button onClick={() => this.handleCreateMCCGroup()}>Create MCC group definition</button></p>
        <p>3. <button onClick={() => this.handleCreateProgramFundingResource()}>Create program funding resource</button></p>
        <p>4. <button onClick={() => this.handleCreateUser()}>Create user</button></p>
        <p>5. <button onClick={() => this.handleCreateVelocityControls()}>Create velocity controls</button></p>
        <p>6. <button onClick={() => this.handleCreateCard()}>Create a card</button></p>
        <p>7. <button onClick={() => this.handleFundUserAccount()}>Fund user's account</button></p>
      </div>
    );
  }
}

export default App;