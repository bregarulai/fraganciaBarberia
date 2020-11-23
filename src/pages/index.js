import React from "react"
import { Layout } from "../components"

export default function Home() {
  return (
    <Layout>
      <div className="section">
        <div className="section-center">
          <div>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>mark</li>
              <li>
                <a href="#">rambo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
