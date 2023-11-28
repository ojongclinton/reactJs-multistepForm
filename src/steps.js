export const steps = [
  {
    name: "Your Profile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.",
    inputs: [
      {
        name: "firstName",
        type: "text",
        required: true,
        label: "First Name",
      },
      {
        name: "lastName",
        type: "text",
        required: true,
        label: "Last Name",
      },
      {
        name: "email",
        type: "email",
        required: true,
        label: "Email",
      },
      {
        name: "phoneNumber",
        type: "tel",
        required: true,
        label: "Phone Number",
      },
      {
        name: "password",
        type: "password",
        required: true,
        label: "Password",
      },
      {
        name: "confirmPassword",
        type: "password",
        required: true,
        label: "Confirm password",
      },
    ],
    additionalInputs: [],
  },
  {
    name: "Business Information",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.",
    sectionName: "GENERAL INFORMATION",
    inputs: [
      {
        name: "brandName",
        type: "text",
        required: true,
        label: "Brand Name",
      },
      {
        name: "brandType",
        type: "text",
        required: true,
        label: "Brand Type",
        toolTip:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "streetAddr",
        type: "text",
        required: true,
        label: "Street Address",
      },
      {
        name: "city",
        type: "text",
        required: true,
        label: "City",
      },
      {
        name: "zipCode",
        type: "text",
        required: true,
        label: "Zip Code",
      },
      {
        name: "taxIdNumber",
        type: "text",
        required: true,
        label: "Tax Id Number",
      },
    ],
    additionalInputs: [
      {
        sectionName: "DOCUMENTS",
        description:
          "Once the following docuemtns are signed, You'll be ready to get started",
        inputs: [
          {
            name: "esignature",
            type: "file",
            required: false,
            placeholder: "Electronically sign the agreement(s)",
          },
          {
            name: "adultBrevage",
            type: "file",
            required: false,
            placeholder:
              "Non adult breverage Kroger market supplier waiver and release",
          },
        ],
      },
      {
        sectionName: "COI PDF UPLOAD",
        description:
          "Once the following docuemtns are signed, You'll be ready to get started",
        inputs: [
          {
            name: "coiPdf",
            type: "file",
            required: false,
            placeholder:
              "Once the following documents are signed, you'll be ready to get started",
          },
        ],
      },
    ],
  },
  {
    name: "Submit data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed vel purus non elit sodales vulputate. Nulla efficitur risus eu purus fermentum, vestibulum congue eros egestas.",
    inputs: [],
  },
];
