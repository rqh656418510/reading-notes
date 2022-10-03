---
title: 现状与未来
description: 现状与未来
---

## Rust 的版本

### 版本介绍

从 2015 年 Rust 发布 1.0 版本以来，Rust 语言已经被广泛应用于各大公司及诸多领域。每一年，Rust 社区都会聚集在一起制订路线图，规划
Rust 未来的发展。在 2018 年，Rust 团队推出了新的大版本 (edition) 计划：

- Rust 2015 版本，包含 Rust 1.0 ~ 1.30 语义化版本。目标是让 Rust 更加稳定。
- Rust 2018 版本，Rust 1.31 将是 Rust 2018 版本的首个语义版本。目标是让 Rust 进一步走向生产级。

::: tip 提示
Rust 的大版本可能是每三年发布一次，不过 Rust 团队对此拥有修改权。
:::

### 版本兼容性

Rust 的编译器可以方便地管理版本的兼容性：

- Rust 2015 版本并未冻结。
- Rust 2015 和 Rust 2018 是彼此兼容的。
- Rust 编译器知道如何编译这两个版本，就像 `gcc` 和 `clang` 知道如何处理 C++ 14 和 C++ 17 一样。
- 可以在 Rust 2018 版本中依赖 Rust 2015 的库，反之亦然。

## Rust 的发展前景

根据社区的流行度调查报告，截至 2018 年 7 月，由 Pull Request 统计的 GitHub Octoverse 报告显示，Rust 语言的总 PR 数排名第 15 位，呈上升趋势。从活跃的项目数来看，Rust 语言一共有 2604 个活跃项目。目前在商业领域，Rust 的重磅商业用户增长迅速，其中包括：

- Amazon，使用 Rust 作为构建工具。
- Atlassian，在后端使用 Rust。
- Dropbox，在前后端均使用了 Rust。
- Facebook，使用 Rust 重写了源码管理工具。
- Google，在 Fuchsia 项目中部分使用了 Rust。
- Microsoft，在 Azure IoT 网络上部分使用了 Rust。
- npm，在其核心服务上使用了 Rust。
- RedHat，使用 Rust 创建了新的存储系统。
- Reddit，使用 Rust 处理评论。
- Twitter，在构建团队中使用 Rust。

除了以上罗列的公司，还有很多其他公司，可以在官方 Rust 之友页面上找到，包括百度、三星、Mozilla 等。目前 Rust 已经被陆续应用在区块链、游戏引擎、WebAssembly 技术、机器学习、分布式数据库、网络服务基础设施、Web 框架、操作系统和嵌入式等领域，相关的工作岗位越来越多。Rust 的前景越来越明朗，未来 Rust 将大有可为。
