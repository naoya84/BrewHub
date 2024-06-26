//
//  CreateReportRepository.swift
//  ios
//
//  Created by naoya on 2024/04/14.
//

import Foundation
import Alamofire
import OpenAPIClient

protocol ReportRepository{
    func create(report: Report) async -> Result<Void, Error>
}

class ReportRepositoryImpl<Client: APIClient>: ReportRepository{
    let apiClient: Client //AFAPIClientを受け取る
    
    init(apiClient: Client) {
        self.apiClient = apiClient
    }
    
    func create(report: Report) async -> Result<Void, Error> {
        let url = URL(string: "http://localhost:8080/api/report/create")
        
        let parameters = SaveReportBody(text: report.text)
        
        let request = PostReport(
            url: url!,
            parameters: parameters
        )
        
        do {
            _ = try await apiClient.upload(request)
            return Result.success(())
        } catch {
            return Result.failure(error)
        }
    }
}
