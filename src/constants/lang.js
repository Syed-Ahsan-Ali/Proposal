export const lang = {
  BUTTON: {
    SAVE: "Save",
    UPDATE: "Update"
  },
  INTEGRATIOSN: {
    KASEYA: {
      TUT_1: {
        sm_img:"/img/cw_setup_1.png",
        sm_hover_img:"/img/hover_image.png",
        lg_img: "/img/cw_setup_large_1.jpg",
        props:[
          {
            key : "1",
            value: "Login to <span class='bold'>Connect Wise Client</span>."
          },
          {
            key : "2",
            value: "Click on <span class='bold'>System</span> on the navigation menu of ConnectWise."
          },
          {
            key : "3",
            value: "Click on Setup Tables."
          },
          {
            key : "4",
            value: "On the search bar for Table, type 'Integrator' and press enter."
          },
          {
            key : "5",
            value: "Select Integrator Login from the results."
          }
        ]

      },
      TUT_2: {
        sm_img:"/img/cw_setup_3.png",
        sm_hover_img:"/img/hover_image.png",
        lg_img: "/img/cw_setup_large_1.jpg",
        props:[
          {
            key : "6",
            value: "Click on '+' sign to add a new integrator Login."
          }
        ]
      },
      TUT_3: {
        sm_img:"/img/cw_setup_2.png",
        sm_hover_img:"/img/hover_image.png",
        lg_img: "/img/cw_setup_large_1.jpg",
        props:[
          {
            key : "7",
            value: "Create a new account by entering a Username and Password. " +
            "(Make sure that there is a CW member with Admin rights already available with the same username)."
          },
          {
            key : "8",
            value: "Change the Access Level to All Records from the dropdown."
          }
        ]
      },
      TUT_4: {
        sm_img:"/img/cw_setup_4.png",
        sm_hover_img:"/img/hover_image.png",
        lg_img: "/img/cw_setup_large_1.jpg",
        props:[
          {
            key : "9",
            value: {
              head: "Enable the following API(s).",
              detail_List: [
                "Service Ticket (Select the Appropriate Service Board)",
                "Contact",
                "Company",
                "Member",
                "System",
                "Configuration",
                "Agreement",
                "Document"
              ]
            }
          },
          {
            key : "10",
            value: "Click Save and Close."
          }
        ]
      }

    }
  },
  COMPANY:{
    DOAMINTRACKER:{
      ICONS:{
        SUCCESS_WHITE:"/img/icon_circle_success_white.svg",
        SUCCESS:"/img/icon_circle_success.svg",
        DANGER:"/img/icon_circle_error.svg",
        WARNING:"/img/icon_circle_warning.svg"
      },
      HEADERS:{
        CLASS:{
          SUCCESS:"panel-heading table-header-bg",
          DANGER:"panel-heading bg-danger",
          WARNING:"panel-heading bg-warning"
        }
      }
    }
  }


};
