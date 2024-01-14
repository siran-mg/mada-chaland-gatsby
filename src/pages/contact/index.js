import React from "react"
import Layout from "../../components/layout"

const ContactPage = () => (
  <Layout>
    <form name="contact" data-netlify="true" className="px-56 py-16">
      <input type="hidden" name="form-name" value="contact" />
      <div className="text-3xl font-bold uppercase text-center w-full mb-8">
        Contact
      </div>
      <div className="text-lg">
        Envoyez nous votre demande, nous vous recontactons dans les plus brefs
        délais.
      </div>

      <table className="mt-8 table border-separate border-spacing-4">
        <tbody>
          <tr>
            <td className="flex flex-col">
              <label>Name</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                className="border p-2 outline-primary"
              />
            </td>
          </tr>
          <tr>
            <td className="flex flex-col">
              <label>Email</label>
            </td>
            <td>
              <input
                type="text"
                name="email"
                className="border p-2 outline-primary"
              />
            </td>
          </tr>
          <tr>
            <td className="flex flex-col">
              <label>Téléphone</label>
            </td>
            <td>
              <input
                type="text"
                name="tel"
                className="border p-2 outline-primary"
              />
            </td>
          </tr>
          <tr>
            <td className="flex flex-col">
              <label>Message</label>
            </td>
            <td>
              <textarea
                name="content"
                className="border p-2 outline-primary"
                cols={120}
                rows={5}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button
          type="submit"
          className="flex items-center bg-secondary shadow-primary text-onSecondary uppercase rounded-full mt-2 px-8 py-2 shadow-lg hover:scale-110 duration-100"
        >
          Envoyer
        </button>
      </p>
    </form>
  </Layout>
)

export default ContactPage
