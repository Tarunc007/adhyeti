// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$( document ).ready(function() {
 
  // Hide Sign Up side on initialization
  $( '.inactive' ).hide();
  
  $( '.mini.button.signup' ).click(function() {
 
    // Hide Sign In and show Sign Up side with slide down effect
    $( '.ui.segment.signin' )
      .hide()
      .end()
    .find( '.ui.segment.signup' )
      .slideDown();
 
  });
 
 
  $( '.mini.button.signin' ).click(function() {
 
    // Hide Sign Up and show Sign In side with slide down effect
    $( '.ui.segment.signup' )
      .hide()
      .end()
    .find( '.ui.segment.signin' )
      .slideDown();
 
  });
});

$( '.ui.form' )
  .form({
    username: {
      identifier : 'username',
      rules: [
        {  
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    email: {
      identifier : 'user_email',
      rules: [
        {
          type   : 'email',
          prompt : 'Please enter a valid email addres'
        }
      ]
    },
    password: {
      identifier : 'user_password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    passwordConfirm: {
      identifier : 'user_password_confirmation',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please confirm your password'
        },
        {
          type   : 'match[password]',
          prompt : 'Password doesn\'t match'
        }
      ]
    },
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    }
});

