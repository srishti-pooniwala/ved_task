import React, { useState } from "react";

const Form = () => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      value: "",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      error: "",
      required: true,
    },
    {
      id: 2,
      name: "title",
      value: "",
      type: "text",
      placeholder: "Enter the title",
      label: "Title",
      error: "",
      required: false,
    },
    {
      id: 3,
      name: "previousDocumentNumber",
      value: "",
      type: "text",
      placeholder: "Enter previous document number",
      label: "Previous Document Number",
      error: "",
      required: false,
    },
    {
      id: 4,
      name: "version",
      value: "",
      type: "text",
      placeholder: "Enter version",
      label: "Version",
      error: "",
      required: true,
    },
    {
      id: 5,
      name: "facility",
      value: "",
      type: "select", // Change type to 'select' for dropdown
      options: ["Option 1", "Option 2", "Option 3"], // Add options for dropdown
      placeholder: "",
      label: "Owning facility",
      error: "",
      required: true,
    },
    {
      id: 6,
      name: "department",
      value: "",
      type: "select", // Change type to 'select' for dropdown
      options: ["Option 1", "Option 2", "Option 3"], // Add options for dropdown
      placeholder: "",
      label: "Owning Department",
      error: "",
      required: true,
    },
    {
      id: 7,
      name: "country",
      value: "",
      type: "select", // Change type to 'select' for dropdown
      options: ["Option 1", "Option 2", "Option 3"], // Add options for dropdown
      placeholder: "",
      label: "Country",
      error: "",
      required: true,
    },
    {
      id: 8,
      name: "imapcatedFacility",
      value: "",
      type: "select", // Change type to 'select' for dropdown
      options: ["Option 1", "Option 2", "Option 3"], // Add options for dropdown
      placeholder: "",
      label: "Imapcated Facility",
      error: "",
      required: false,
    },
    {
      id: 9,
      name: "imapcatedDepartments",
      value: "",
      type: "select", // Change type to 'select' for dropdown
      options: ["Option 1", "Option 2", "Option 3"], // Add options for dropdown
      placeholder: "",
      label: "Imapcated Departments",
      error: "",
      required: false,
    },
  ]);

  // Handle form field changes
  const handleInputChange = (id, value) => {
    setFormFields((prevState) =>
      prevState.map((field) =>
        field.id === id ? { ...field, value: value } : field
      )
    );
  };

  return (
    <form className="form">
      <div className="buttons">
        <button className="cancel">Cancel</button>
        <button type="submit" className="save">
          Save
        </button>
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-down"></i>
          <div>General</div>
        </div>
        {formFields.slice(0, 4).map((field) => (
          <div key={field.id} className="gridElements">
            <label className="labels">
              {field.label}
              {field.required && <span className="red">*</span>}
            </label>
            <input
              name={field.name}
              className="inputs"
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              required={field.required}
            />
            {field.error && <span style={{ color: "red" }}>{field.error}</span>}
          </div>
        ))}
        <div className="gridElements">
          <div className="labels">Lifecycle state stage ID:</div>
          <div className="value"></div>
        </div>
        <div className="gridElements">
          <div className="labels">Lifecycle state:</div>
          <div className="value"></div>
        </div>
        <div className="gridElements">
          <div className="labels">Subtype:</div>
          <div className="value">Standard Operating Procedure</div>
        </div>
        <div className="gridElements">
          <div className="labels">Type:</div>
          <div className="value">Governance and procedure</div>
        </div>
        <div className="gridElements">
          <div className="labels">Tags:</div>
          <div className="value"></div>
        </div>
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-down"></i>
          <div>Applicability</div>
        </div>
        {formFields.slice(4, 9).map((field) => (
          <div key={field.id} className="gridElements">
            <label className="labels">
              {field.label}
              {field.required && <span className="red">*</span>}
            </label>
            {field.type === "select" ? (
              <select
                className="selects"
                name={field.name}
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                required={field.required}
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "multi-select" ? (
              <select
                name={field.name}
                className="selects"
                multiple
                value={field.value}
                required={field.required}
                onChange={(e) =>
                  handleInputChange(
                    field.id,
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  )
                }
              >
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                className="inputs"
                type={field.type}
                value={field.value}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            )}
            {field.error && <span style={{ color: "red" }}>{field.error}</span>}
          </div>
        ))}
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-right"></i>
          <div>Training</div>
        </div>
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-right"></i>
          <div>Status Dates</div>
        </div>
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-right"></i>
          <div>Periodic Review</div>
        </div>
      </div>

      <div className="formElementsSection">
        <div className="headings">
          <i className="fa-solid fa-caret-right"></i>
          <div>Changed Information</div>
        </div>
      </div>
    </form>
  );
};

export default Form;
