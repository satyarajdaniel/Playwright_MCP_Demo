# SauceDemo Login Flow Plan

## Overview
Validate the SauceDemo login experience for both successful and unsuccessful authentication paths.

## Suite: Login

### 1. Standard user can log in successfully
- Steps:
  1. Open https://www.saucedemo.com.
  2. Enter username `standard_user`.
  3. Enter password `secret_sauce`.
  4. Click the Login button.
- Expected result:
  - The user is redirected to the inventory page.
  - The Products heading is visible.

### 2. Locked-out user shows the correct error
- Steps:
  1. Open https://www.saucedemo.com.
  2. Enter username `locked_out_user`.
  3. Enter password `secret_sauce`.
  4. Click the Login button.
- Expected result:
  - An error message is displayed: `Epic sadface: Sorry, this user has been locked out.`
  - The user remains on the login page.

### 3. Empty username submission shows validation error
- Steps:
  1. Open https://www.saucedemo.com.
  2. Leave the username field empty.
  3. Enter password `secret_sauce`.
  4. Click the Login button.
- Expected result:
  - An error message is displayed: `Epic sadface: Username is required`.
  - The user remains on the login page.

### 4. Empty password submission shows validation error
- Steps:
  1. Open https://www.saucedemo.com.
  2. Enter username `standard_user`.
  3. Leave the password field empty.
  4. Click the Login button.
- Expected result:
  - An error message is displayed: `Epic sadface: Password is required`.
  - The user remains on the login page.

### 5. Invalid credentials show mismatch error
- Steps:
  1. Open https://www.saucedemo.com.
  2. Enter username `standard_user`.
  3. Enter password `wrong_password`.
  4. Click the Login button.
- Expected result:
  - An error message is displayed: `Epic sadface: Username and password do not match any user in this service`.
  - The user remains on the login page.
