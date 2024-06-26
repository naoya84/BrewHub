//
//  ReportRepositoryTests.swift
//  iosTests
//
//  Created by naoya on 2024/04/16.
//

import Nimble
import SwiftUI
import ViewInspector
import XCTest
@testable import ios

final class ReportRepositoryTests: XCTestCase {
    func test_createメソッドを実行すると正しいエンドポイントにリクエストする() throws {
        // Given:サーバー側のAPIをモックし
        
        
        // When: ReportRepositoryのcreateメソッドを実行した時
        let recordRepository = DIContainer.make().reportRepository
        recordRepository.create(report: Report(id: 0, text: "test"))
        
        //Then: エンドポイントがlocalhost:8080/reportである
        expect("").to(equal("test"))
    }

}
